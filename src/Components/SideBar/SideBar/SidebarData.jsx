import React from 'react';
import { MdHeadsetMic, MdLaptop, MdDeviceThermostat, MdPlumbing, MdOutlineKeyboard } from "react-icons/md";
import * as IoIcons from 'react-icons/io';
import { GiAbstract029, Gi3DHammer, GiAbstract048, GiAbstract109, GiAbstract118 } from "react-icons/gi";
import * as RiIcons from 'react-icons/ri';




export const SidebarData = [
    {
        title: 'Componentes de PC',
        path: '/',
        icon: <GiAbstract029 />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Procesadores',
            path: '/',
            icon: <GiAbstract109 />
        },
        {
            title: 'Placas de Video',
            path: '/overview/revenue',
            icon: <GiAbstract118 />
        },
        {
            title: 'Motherboards',
            path: '/overview/revenue',
            icon: <GiAbstract109 />
        },
        {
            title: 'Fuentes',
            path: '/overview/revenue',
            icon: <GiAbstract118 />
        },
        {
            title: 'Memoria Ram',
            path: '/overview/revenue',
            icon: <GiAbstract109 />
        },
        ]
    },
    {
        title: 'Mantenimiento',
        path: '/',
        icon: <Gi3DHammer />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Pasta Térmica',
            path: '/reports/reports1',
            icon: <MdDeviceThermostat />,
            cName: 'sub-nav'
        },
        {
            title: 'Destornilladores',
            path: '/reports/reports2',
            icon: <MdPlumbing />,
            cName: 'sub-nav'
        },
        {
            title: 'Tester de Fuentes',
            path: '/reports/reports2',
            icon: <MdPlumbing />,
            cName: 'sub-nav'
        },
        {
            title: 'Kit de Mantenimiento',
            path: '/reports/reports2',
            icon: <MdPlumbing />,
            cName: 'sub-nav'
        }
        ]
    },
    {
        title: 'Periféricos',
        path: '/',
        icon: <MdHeadsetMic />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Teclados',
            path: '/reports/reports1',
            icon: <MdOutlineKeyboard />,
            cName: 'sub-nav'
        },
        {
            title: 'Auriculares',
            path: '/reports/reports2',
            icon: <MdHeadsetMic />,
            cName: 'sub-nav'
        }
        ]
    },
    {
        title: 'Laptops',
        path: '/',
        icon: <MdLaptop />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Laptops',
            path: '/messages/message1',
            icon: <IoIcons.IoIosPaper />
        },
        /* {
            title: 'Message 2',
            path: '/messages/message2',
            icon: <IoIcons.IoIosPaper />
        } */
        ]
    },
    {
        title: 'Destacados',
        path: '/',
        icon: <GiAbstract048 />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
        {
            title: 'Destacados',
            path: '/messages/message1',
            icon: <IoIcons.IoIosPaper />
        },
        /* {
            title: 'Message 2',
            path: '/messages/message2',
            icon: <IoIcons.IoIosPaper />
        } */
        ]
    },
    {
        title: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle />
    }
];

