import React, {
  useState,
  useCallback,
  useRef,
  // useMemo
} from 'react';
import style from './HomePage.module.scss';
import products from '../../assets/products.json';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { SideBar } from '../../components/SideBar';
import { ProductList } from '../../components/ProductList';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Product } from '../../types/Product';
import { SortByPrice } from '../../types/PriceSort';

function getOrderedProducts(
  goods: Product[],
  sortType: SortByPrice,
) {
  const sortedGoods = [...goods];

  return sortedGoods.sort((productA, productB) => {
    switch (sortType) {
      case SortByPrice.High:
        return productA.price - productB.price;

      case SortByPrice.Low:
        return productB.price - productA.price;

      case SortByPrice.None:
      default:
        return 0;
    }
  });
}

function getProductsByBrands(goods: Product[], brands: string[]): Product[] {
  const visibleGoods = goods.filter(product => (
    brands.length > 0
      ? brands.every(brand => (
        product.brand === brand))
      : product
  ));

  return visibleGoods;
}

function getProductsByPrice(goods: Product[], price: number[]): Product[] {
  const visibleGoods = goods.filter(product => (
    price.length > 0
      ? product.price > price[0] && product.price < price[1]
      : product
  ));

  return visibleGoods;
}

export const HomePage: React.FC = () => {
  const [sortType, setSortType] = useState<SortByPrice>(SortByPrice.None);
  const [brandsSelected, setBrandsSelected] = useState<string[]>([]);
  const [electronics, setElectronics] = useState<Product[]>(products);
  const [price, setPrice] = useState<number[]>([150, 3000]);

  const brandInput = useRef([]);

  const handleBrandChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setBrandsSelected([...brandsSelected, event.target.value]);
    } else {
      setBrandsSelected(brandsSelected
        .filter(brandSelected => brandSelected !== event.target.value));
    }
  }, [brandsSelected]);

  const handleProductFilter = useCallback(() => {
    const visibleProducts: Product[] = [...electronics];

    const productsByBrand = getProductsByBrands(visibleProducts, brandsSelected);

    const productsSortedByPrice = getProductsByPrice(productsByBrand, price);

    setElectronics(productsSortedByPrice);
  }, [electronics, brandsSelected, price]);

  const handleFilterReset = useCallback(() => {
    window.location.reload();
    setSortType(SortByPrice.None);
    setBrandsSelected([]);
    setElectronics(products);
    setPrice([150, 3000]);
  }, []);

  const sortedProducts = getOrderedProducts(electronics, sortType);

  return (
    <div className={style.home_page}>
      <div className={style.home_page__container}>
        <Breadcrumbs
          crumbs={[
            { title: 'home', path: '/' },
            { title: 'Electronics', path: '/electronics' },
          ]}
        />

        <div className={style.home_page_nav__container}>
          <SearchBar
            onSort={setSortType}
          />
        </div>

        <div className={style.home_page_product__container}>
          <SideBar
            brandInput={brandInput}
            price={price}
            onPrice={setPrice}
            onBrandsChange={handleBrandChange}
            onFilterReset={handleFilterReset}
            onFilterApplied={handleProductFilter}
          />

          <ProductList products={sortedProducts} />
        </div>
      </div>
    </div>
  );
};
