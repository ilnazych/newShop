import {
  UserOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
  ContainerOutlined,
  CarOutlined,
  FolderOutlined,
  ArrowsAltOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem("Личный кабинет", "1", <UserOutlined />),
  getItem("Сообщения", "2", <MessageOutlined />),
  getItem("Корзина", "3", <ShoppingCartOutlined />),
  getItem("Заказы", "4", <ContainerOutlined />),
  getItem("Отгрузки", "5", <CarOutlined />),
  getItem("Разделы", "6", <FolderOutlined />, [
    getItem("Шины", "7", <ArrowsAltOutlined />),
    getItem("Запчасти", "8", <FolderOutlined />, [
      getItem("Запрос по артиклу", "9", <ArrowsAltOutlined />),
      getItem("Запрос на подбор", "10", <ArrowsAltOutlined />),
      getItem("История запросов", "11", <ArrowsAltOutlined />),
      getItem("Каталог номенглатуры", "12", <ArrowsAltOutlined />),
      getItem("Каталоги", "13", <ArrowsAltOutlined />),
      getItem("Каталоги LONKING", "14", <ArrowsAltOutlined />),
    ]),
    getItem("Вилы", "15", <ArrowsAltOutlined />),
    getItem("Двигатели", "16", <ArrowsAltOutlined />),
    getItem("Навесное оборудование", "17", <FolderOutlined />, [
      getItem("Карета бокового смещения", "18", <ArrowsAltOutlined />),
      getItem("Захваты киповые", "19", <ArrowsAltOutlined />),
      getItem("Захваты для шин", "20", <ArrowsAltOutlined />),
      getItem("Захваты для рулонов", "21", <ArrowsAltOutlined />),
      getItem("Ротаторы", "22", <ArrowsAltOutlined />),
      getItem("Позиционеры", "23", <ArrowsAltOutlined />),
    ]),
    getItem("Аккумуляторы", "24", <FolderOutlined />, [
      getItem("Аккумуляторы", "25", <ArrowsAltOutlined />),
      getItem("Комлектующие", "26", <ArrowsAltOutlined />),
      getItem("Элементы", "27", <ArrowsAltOutlined />),
      getItem("Зарядные устройства", "28", <ArrowsAltOutlined />),
    ]),
  ]),
];
