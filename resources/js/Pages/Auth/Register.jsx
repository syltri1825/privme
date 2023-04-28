import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest rule="b" auth={auth}>
            <Head title="Register" />

            <div className="hs-grid">
                <div className="hs-grid1l">
                    <Link href="/">
                        <img
                            src="../images/pointclient3.png"
                            width={"50px"}
                            height={"auto"}
                            alt=""
                        />
                    </Link>
                    &nbsp;
                    <h2>Point Client</h2>
                </div>
                <div className="hs-grid2l"></div>
                <div className="hs-grid3l">
                    <>
                        <Link href={route('login')} className="button-a2">
                            Log In
                        </Link>
                    </>
                </div>
                <div className='hs-grid4l'>
                </div>
                <div className='hs-grid5l'>
                    <h1>Sign Up</h1>
                    <form onSubmit={submit}>
                        <div>
                            <Label forInput="name" value="Name" />

                            <Input
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.name} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <Label forInput="email" value="Email" />

                            <Input
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password" value="Password" />

                            <Input
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <Label forInput="password_confirmation" value="Confirm Password" />

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                handleChange={onHandleChange}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Link href={route('login')} className="underline text-sm text-gray-600 hover:text-gray-900">
                                Already registered?
                            </Link>
                            &nbsp;&nbsp;&nbsp;
                            <Button className="button-a4" processing={processing}>
                                Register
                            </Button>
                        </div>
                    </form>
                </div>
                <div className='hs-grid6l'>
                </div>

            </div>


        </Guest>
    );
}
