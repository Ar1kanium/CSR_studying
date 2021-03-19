import react from 'react'
import * as AiIcons from 'react-icons/ai'

export const BarData = [
    {
        title: 'Главная страница',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        clName : 'nav-text'
    },
    {
        title: 'Новости',
        path: '/news',
        icon: <AiIcons.AiFillNotification/>,
        clName : 'nav-text'
    },
    {
        title: 'Услуги',
        path: '/services',
        icon: <AiIcons.AiFillTool/>,
        clName : 'nav-text'
    },
    {
        title: 'Вакансии',
        path: '/career',
        icon: <AiIcons.AiFillIdcard/>,
        clName : 'nav-text'
    },
    {
        title: 'Социальные проекты',
        path: '/social_responsibilities',
        icon: <AiIcons.AiFillHeart/>,
        clName : 'nav-text'
    },
]

export const HeaderTitle = [
    {
        title: '"ООО" ЦентрСпецРемонт'
    },
    {
        title: 'Нас объединяет общее дело!'
    }
]