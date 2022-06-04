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
  const id = item._id;
  const name = item.displayName;
  const slug = item.displayName;
  const price = item?.listPrice;
  const quantity = item.quantity;
  const unit = "1 each";
  if (!isEmpty(variation)) {
    return {
      id: `${id}.${variation.id}`,
      productId: id,
      displayName: `${name} - ${variation.title}`,
      slug:variation.displayName,
      unit:"1 each",
      stock: variation.reviews,
      price: item.listPrice ? item.listPrice : item.listPrice,
      image: variation.heroImage,
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
