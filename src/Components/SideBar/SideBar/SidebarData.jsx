import React from 'react';
import { MdHeadsetMic, MdLaptop, MdDeviceThermostat, MdPlumbing, MdOutlineKeyboard } from "react-icons/md";
import * as IoIcons from 'react-icons/io';
import { GiAbstract029, Gi3DHammer, GiAbstract048, GiAbstract109, GiAbstract118 } from "react-icons/gi";
import * as RiIcons from 'react-icons/ri';




export const SidebarData = [
    {
        title: 'Componentes de PC',
        icon: <GiAbstract029 />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Procesadores',
            icon: <GiAbstract109 />
        },
        {
            title: 'Placas de Video',
            icon: <GiAbstract118 />
        },
        {
            title: 'Motherboards',
            icon: <GiAbstract109 />
        },
        {
            title: 'Fuentes',
            icon: <GiAbstract118 />
        },
        {
            title: 'Memoria Ram',
            icon: <GiAbstract109 />
        },
        ]
    },
    {
        title: 'Mantenimiento',
        icon: <Gi3DHammer />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Pasta Térmica',
            icon: <MdDeviceThermostat />,
            cName: 'sub-nav'
        },
        {
            title: 'Destornilladores',
            icon: <MdPlumbing />,
            cName: 'sub-nav'
        },
        {
            title: 'Tester de Fuentes',
            icon: <MdPlumbing />,
            cName: 'sub-nav'
        },
        {
            title: 'Kit de Mantenimiento',
            icon: <MdPlumbing />,
            cName: 'sub-nav'
        }
        ]
    },
    {
        title: 'Periféricos',
        icon: <MdHeadsetMic />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Teclados',
            icon: <MdOutlineKeyboard />,
            cName: 'sub-nav'
        },
        {
            title: 'Auriculares',
            icon: <MdHeadsetMic />,
            cName: 'sub-nav'
        }
        ]
    },
    {
        title: 'Laptops',
        icon: <MdLaptop />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Laptops',
            icon: <IoIcons.IoIosPaper />
        },
        ]
    },
    {
        title: 'Destacados',
        icon: <GiAbstract048 />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Destacados',
            icon: <IoIcons.IoIosPaper />
        },
        /* {
            title: 'Message 2',
            path: '/messages/message2',
            icon: <IoIcons.IoIosPaper />
        } */
        ]
    },
    /* {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />
    } */
];

