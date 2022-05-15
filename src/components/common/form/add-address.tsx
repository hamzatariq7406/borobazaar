import Input from '@components/ui/form/input';
import Button from '@components/ui/button';
import TextArea from '@components/ui/form/text-area';
import { useForm } from 'react-hook-form';
import { useModalState } from '@components/common/modal/modal.context';
import { useModalAction } from '@components/common/modal/modal.context';
import CloseButton from '@components/ui/close-button';
import Heading from '@components/ui/heading';
import Map from '@components/ui/map';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import Router from 'next/router';

interface ContactFormValues {
  title: string;
  default: boolean;
  lat: number;
  lng: number;
  formatted_address?: string;
}

const AddAddressForm: React.FC = () => {
  const { t } = useTranslation();
  const { data } = useModalState();

  const { closeModal } = useModalAction();

  function onSubmit(values: ContactFormValues, e: any) {
    let user: any = null;
    if (localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user") || "")
    }

    axios.post("https://kahf-mall.herokuapp.com/api/address/add-address", {
      title: values.title,
      default: true,
      address: {
        formatted_address: values.formatted_address
      }
    },{
      headers: { Authorization: `Bearer ${user.token}` }
    }).then(res => {
      alert('address added successfully!!!');
      closeModal();
      Router.reload();
    }).catch(err => {
      console.log(err.response.data);
      alert('error in adding address!!!');
    })
  }

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      title: data || data?.title ? data?.title : '',
      default: data || data?.default ? data?.default : '',
      formatted_address:
        data || data?.address?.formatted_address
          ? data?.address?.formatted_address
          : '',
    },
  });

  return (
    <div className="w-full md:w-[600px] lg:w-[900px] xl:w-[1000px] mx-auto p-5 sm:p-8 bg-skin-fill rounded-md">
      <CloseButton onClick={closeModal} />
      <Heading variant="title" className="mb-8 -mt-1.5">
        {t('common:text-add-delivery-address')}
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-6">
          <Input
            variant="solid"
            label="Address Title"
            {...register('title', { required: 'Title Required' })}
            error={errors.title?.message}
          />
        </div>
        <div className="grid grid-cols-1 mb-6 gap-7">
          {/* <Map
            lat={data?.address?.lat || 1.295831}
            lng={data?.address?.lng || 103.76261}
            height={'420px'}
            zoom={15}
            showInfoWindow={false}
            mapCurrentPosition={(value: string) =>
              setValue('formatted_address', value)
            }
          /> */}
          <TextArea
            label="Address"
            {...register('formatted_address', {
              required: 'forms:address-required',
            })}
            error={errors.formatted_address?.message}
            className="text-skin-base"
            variant="solid"
          />
        </div>
        <div className="flex w-full justify-end">
          <Button className="h-11 md:h-12 mt-1.5" type="submit">
            {t('common:text-save-address')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddAddressForm;
