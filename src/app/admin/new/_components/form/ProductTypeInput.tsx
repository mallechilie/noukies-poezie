import Loading from "@/app/loading";
import ProductType from "@/database/models/ProductType";
import { MenuItem, Select } from "@mui/material";

export default async function ProductTypeInput(props: {
  onChange?: (e: { target: { value: string } }) => void;
  value?: string;
  productTypes: ProductType[];
}) {
  const handleChange = (e: { target: { value: string } }) => {
    if (props.onChange) props.onChange(e);
  };

  return props.productTypes ? (
    <Select
      labelId="ProductTypeInput"
      id="ProductTypeInput"
      value={props.value}
      onChange={handleChange}
      label="Product type"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {props.productTypes.map((productType) => {
        const id = productType._id?.toString() ?? productType.verzending;
        return (
          <MenuItem value={id} key={id}>
            {productType._id?.toString()}
          </MenuItem>
        );
      })}
    </Select>
  ) : (
    <Loading />
  );
}
