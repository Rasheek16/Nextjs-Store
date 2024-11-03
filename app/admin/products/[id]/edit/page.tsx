// import { fetchAdminProductDetails, updateProductAction } from '@/app/utils/actions';
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import TextAreaInput from "@/components/form/TextInput";
import { SubmitButton } from "@/components/form/Buttons";
import CheckboxInput from "@/components/form/CheckboxInput";
import {
  fetchAdminProductDetails,
  updateProductAction,
  updateProductImageAction,
} from "@/app/utils/action";
import ImageInputContainer from "@/components/form/ImageInputContainer";

async function EditProductPage({ params }: { params: { id: string } }) {
  
  const id  = (await params).id;
  console.log(id);
  const product = await fetchAdminProductDetails(id);
  const { name, company, description, price, featured } = product;
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">update product</h1>
      <div className="border p-8 rounded">
        <ImageInputContainer
          action={updateProductImageAction}
          name={name}
          image={product.image}
          text="update image"
        >
          <input type="hidden" name='id' value={id} />
          <input type="hidden" name="url" value={product.image} />
        </ImageInputContainer>
        <FormContainer action={updateProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-4">
            <input type="hidden" name="id" value={id} />
            <FormInput
              type="text"
              name="name"
              label="product name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="product company"
              defaultValue={company}
            />
            <PriceInput defaultValue={price} />
          </div>
          <TextAreaInput
            name="description"
            labelText="product decription"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput
              name="featured"
              defaultChecked={featured}
              label="featured"
            />
          </div>
          <SubmitButton text="update product" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
}
export default EditProductPage;