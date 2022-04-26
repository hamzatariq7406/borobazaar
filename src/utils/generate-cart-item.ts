import isEmpty from 'lodash/isEmpty';
interface Item {
  id: string | number;
  name: string;
  slug: string;
  image: {
    thumbnail: string;
    [key: string]: unknown;
  };
  price: number;
  sale_price?: number;
  quantity?: number;
  [key: string]: unknown;
}
interface Variation {
  id: string | number;
  title: string;
  price: number;
  sale_price?: number;
  quantity: number;
  [key: string]: unknown;
}
export function generateCartItem(item: any, variation: any) {
  const id = item.productId;
  const name = item.displayName;
  const slug = item.displayName;
  const price = item?.currentSku?.listPrice;
  const quantity = item.reviews;
  const unit = "1 each";
  if (!isEmpty(variation)) {
    return {
      id: `${id}.${variation.id}`,
      productId: id,
      displayName: `${name} - ${variation.title}`,
      slug:variation.displayName,
      unit:"1 each",
      stock: variation.reviews,
      price: variation.currentSku.listPrice ? variation.currentSku.listPrice : variation.currentSku.listPrice,
      image: variation.currentSku.heroImage,
      variationId: variation.id,
    };
  }
  return {
    id,
    name,
    slug,
    unit,
    image: item?.heroImage,
    stock: quantity,
    price: price,
  };
}
