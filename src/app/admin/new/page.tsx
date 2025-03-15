import getProductTypes from "@/database/api/productType/getProductType";
import NewProductWrapper from "./_components/NewProductWrapper";

export default async function Page() {
  const productTypes = await getProductTypes();
  return <NewProductWrapper productTypes={productTypes} />;
}
