import { useState } from 'react';
import { useUI } from '@contexts/ui.context';
import Input from '@components/ui/form/input-admin';
import PasswordInput from '@components/ui/form/password-input';
import Button from '@components/ui/button';
import { useForm } from 'react-hook-form';
import Logo from '@components/ui/logo';
import { SignUpInputType } from '@framework/auth/use-admin';
import Link from '@components/ui/link';
import { useTranslation } from 'next-i18next';
import Image from '@components/ui/image';
import { useModalAction } from '@components/common/modal/modal.context';
import Switch from '@components/ui/switch';
import CloseButton from '@components/ui/close-button';
import cn from 'classnames';
import axios from 'axios';
import { ROUTES } from '@utils/routes';
import {useRouter} from 'next/router';

interface SignUpFormProps {
    isPopup?: boolean;
    className?: string;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
    isPopup = true,
    className,
}) => {
    const { t } = useTranslation();
    const { authorize } = useUI();
    const router = useRouter();
    const [passwordMatchError, setPasswordMatchError] = useState("");
    const [serverError, setServerError] = useState("");
    const { closeModal, openModal } = useModalAction();
    const [remember, setRemember] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpInputType>();

    function handleSignIn() {
        return openModal('LOGIN_VIEW');
    }
    function handleForgetPassword() {
        return openModal('FORGET_PASSWORD');
    }
    function onSubmit({ productName, tags, listPrice, salePrice, mainImage, otherImage1, otherImage2, quantity, description, category }: SignUpInputType) {
        let user = null;
        if (localStorage.getItem("user")) {
            user = JSON.parse(localStorage.getItem("user") || "")
        }
        axios.post("https://kahf-mall.herokuapp.com/api/products", {
            productName: productName,
            description: description,
            category: category,
            images: [otherImage1, otherImage2],
            brandName: tags,
            heroImage: mainImage,
            listPrice: listPrice,
            salePrice: salePrice,
            quantity: quantity
        }, {
            headers: { Authorization: `Bearer ${user.token}` }
        }).then(res => {
            alert("product added successfully!!!");
            router.reload();
        }).catch(err => {
            setServerError(err?.response?.data?.message);
        })

    }
    return (
        <div
            className={cn(
                'flex bg-skin-fill mx-auto rounded-lg w-full lg:w-[1000px] 2xl:w-[1200px]',
                className
            )}
        >
            {isPopup === true && <CloseButton onClick={closeModal} />}
            <div className="flex bg-skin-fill mx-auto rounded-lg overflow-hidden w-full">
                {/* <div className="md:w-[55%] xl:w-[60%] registration hidden md:block">
          <Image
            src="/assets/images/registration.png"
            alt="sign up"
            width={800}
            height={750}
            className="w-full"
          />
        </div> */}
                <div className="w-full md:w-[100%] xl:w-[100%] py-6 sm:py-10 px-4 sm:px-8 lg:px-12  rounded-md shadow-dropDown flex flex-col justify-center">
                    <div className="text-center mb-6 pt-2.5">
                        <div onClick={closeModal}>
                            <Logo />
                        </div>
                        <h4 className="text-skin-base font-semibold text-xl sm:text-2xl  sm:pt-3 ">
                            {"Add Products"}
                        </h4>
                    </div>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col justify-center"
                        noValidate
                    >
                        <div className="flex flex-col space-y-4">
                            <Input
                                label={'Product Name'}
                                type="text"
                                variant="solid"
                                {...register('productName')}
                            />
                            <Input
                                label={'Tags'}
                                type="text"
                                variant="solid"
                                {...register('tags')}
                            />
                            <Input
                                label={'List Price'}
                                type="text"
                                variant="solid"
                                {...register('listPrice')}
                            />
                            <Input
                                label={'Sale Price'}
                                type="text"
                                variant="solid"
                                {...register('salePrice')}
                            />
                            <Input
                                label={'Main Image'}
                                type="text"
                                variant="solid"
                                {...register('mainImage')}
                            />
                            <Input
                                label={'Other Image'}
                                type="text"
                                variant="solid"
                                {...register('otherImage1')}
                            />
                            <Input
                                label={'Other Image'}
                                type="text"
                                variant="solid"
                                {...register('otherImage2')}
                            />
                            <Input
                                label={'Quantity'}
                                type="text"
                                variant="solid"
                                {...register('quantity')}
                            />
                            <Input
                                label={'Description'}
                                type="text"
                                variant="solid"
                                {...register('description')}
                            />
                            <Input
                                label={'Category'}
                                type="text"
                                variant="solid"
                                {...register('category')}
                            />

                            <div className="relative">
                                <Button
                                    type="submit"
                                    className="h-11 md:h-12 w-full mt-2 font-15px md:font-15px tracking-normal"
                                    variant="formButton"
                                >
                                    {"Add Product"}
                                </Button>
                                <h2 style={{ color: 'red', fontSize: '1em' }}>{serverError}</h2>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
