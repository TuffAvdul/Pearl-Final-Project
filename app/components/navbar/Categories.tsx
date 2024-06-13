'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { IoRestaurantSharp } from "react-icons/io5";
import { TbPool } from 'react-icons/tb';
import {
    GiAutoRepair,
    GiCoffeeCup,

} from 'react-icons/gi';
import { FaCode, FaDumbbell, FaHandHoldingMedical, FaHome, FaPencilRuler, FaShoppingBag } from 'react-icons/fa';
import { BsBank2 } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';

import CategoryBox from "../CategoryBox";
import Container from '../Container';
import { FaHotel, FaScissors, FaTruckFast } from 'react-icons/fa6';


export const categories = [
    {
        label: 'Restaurants',
        icon: IoRestaurantSharp,
        description: 'This property is close to the beach!',
    },
    {
        label: 'Shopping',
        icon: FaShoppingBag,
        description: 'This property is has windmills!',
    },
    {
        label: 'Hotels & Travel',
        icon: FaHotel,
        description: 'This property is modern!'
    },
    {
        label: 'Home Services',
        icon: FaHome,
        description: 'This property is in the countryside!'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This is property has a beautiful pool!'
    },
    {
        label: 'Automotive',
        icon: GiAutoRepair,
        description: 'This property is on an island!'
    },
    {
        label: 'Beauty & Spas',
        icon: FaScissors,
        description: 'This property is near a lake!'
    },
    {
        label: 'Education',
        icon: FaPencilRuler,
        description: 'This property has skiing activies!'
    },
    {
        label: 'Health & Med',
        icon: FaHandHoldingMedical,
        description: 'This property is an ancient castle!'
    },
    {
        label: 'Sports & Gym',
        icon: FaDumbbell,
        description: 'This property is in a spooky cave!'
    },
    {
        label: 'Tech',
        icon: FaCode,
        description: 'This property offers camping activities!'
    },
    {
        label: 'Cafe',
        icon: GiCoffeeCup,
        description: 'This property is in arctic environment!'
    },
    {
        label: 'Movers',
        icon: FaTruckFast,
        description: 'This property is in the desert!'
    },
    {
        label: 'Banks',
        icon: BsBank2,
        description: 'This property is in a barn!'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This property is brand new and luxurious!'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';

    if (!isMainPage) {
        return null;
    }

    return (
        <Container>
            <div
                className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
            >
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        icon={item.icon}
                        selected={category === item.label}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Categories;