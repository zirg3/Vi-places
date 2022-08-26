import Layout from "../../common/Layout";
import {FC, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthFields} from "./auth.interface";
import styles from '../auth/Auth.module.scss'
import stylesButton from '../../screens/place/BookTrip/BookTrip.module.scss'
import {BsArrowRightShort} from "react-icons/bs";
import {signUp} from "next-auth-sanity/client";
import {signIn, useSession} from "next-auth/react";
import {toast} from "react-toastify";
import {useRouter} from "next/router";
import {router} from "next/client";

const Auth:FC = () => {
    const [typeForm, setTypeForm] = useState<'login' | 'register'>('login')
    const {data} = useSession()
    const {handleSubmit, register, formState: {errors}, reset} = useForm<IAuthFields>({
        mode: 'onChange'
    })

    const {push} = useRouter()
    const isReg = typeForm === 'register'
    const onSubmit: SubmitHandler<IAuthFields> = async (data) => {
        if (isReg) {
            let reg = await signUp(data)
            if (reg.error) {
                toast.error('Пользователь уже существует')
                return
            } else {
                toast.success('Вы успешно зарегистрировались')
                reset({email: '', password: '', login: ''})
            }
        } else {
            const auth:any = await signIn('sanity-login', {
                redirect: false,
                ...data,
            });
            if (auth.error) {
                toast.error('Неверный логин или пароль')
                return
            } else {
                toast.success('Вы успешно вошли')
                await push('/')
            }
        }
    }

    return (
        <Layout>
            {data && <h1 className={styles.title}>Здравствуйте <br/>{data.user?.email}</h1>}
            {!data &&
                <>
                  <h1 className={styles.title}>{isReg ? 'Регистрация' : 'Вход'}</h1>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.wrapper}>
                      <input className={styles.input} {...register('email', {required: true, pattern: /\S+@\S+\.\S+/ })} type="text" placeholder='Емаил'/>
                        {errors.email?.type === 'required' && <span className={styles.error}>Заполните поле</span>}
                        {errors.email?.type === 'pattern' && <span className={styles.error}>Почта должна содержать @xxx.xxx</span>}
                    </div>
                    <div className={styles.wrapper}>
                      <input className={styles.input} {...register('password', {required: true, minLength: 8})} type="password" placeholder='Пароль'/>
                        {errors.password?.type === 'required' && <span className={styles.error}>Заполните поле</span>}
                        {errors.password?.type === 'minLength' && <span className={styles.error}>Пароль должен содержать не менее 8 символов</span>}
                    </div>
                    <button className={stylesButton.button}>
                      <span className={stylesButton.text}>{isReg ? 'Регистрация' : 'Войти'}</span>
                      <span className={stylesButton.icon}>
                        <BsArrowRightShort size='18'/>
                    </span>
                    </button>
                  </form>
                  <div className={styles.changeType}>
                    <button  onClick={() => setTypeForm(isReg ? 'login' : 'register')}>
                        {isReg ? 'Войти' : 'Зарегистрироваться'}
                    </button>
                  </div>
                </>
            }

        </Layout>
    );
};

export default Auth;
