'use client';
import React, { useState , useEffect } from 'react';
import Navbar from './componet/nav';
import Menu from './componet/menu';
import ItemCard from './componet/itemCard';
import Flavor from './componet/flavor';
import InfoCard from './componet/infoCard';
import Footer from './componet/footer';
import { Axios } from './Instance/instance';
import axios from 'axios';

const value = ["ORANGE MINT", "BLUE MIST", "MIGHTY FREEZE", "LUV 66", "PEACH", "WATERMELON"];
interface Item {
 
  name: string;
  category: string;
}

const Home: React.FC = () => {
  const [flavors, setFlavors] = useState<string[]>(value);
  const [branchItems, setBrunchItems] = useState<Item[]>([]);
  const [drinksItems, setDrinksItems] = useState<Item[]>([]);
  console.log(drinksItems,'kkkk')


  useEffect(() => {
    const getitemdata = async () => {
      try {
        const response = await Axios.get<{ status: string; data: Item[] }>("/api/get");
        if (response.data.status === "success") {
          const brunchItems = response.data.data.filter((item: Item) => item.category === "branch cocktails");
          const drinksItems = response.data.data.filter((item: Item) => item.category === "drinks");

          setBrunchItems(brunchItems);
          setDrinksItems(drinksItems);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getitemdata();
  }, []);
  

  return (
    <div>
      <Navbar />
      <Menu />
      <ItemCard items={drinksItems} title="DRINKS" image1="jar.png" image2="cup1.png" top={true} />
      <ItemCard items={branchItems} title="BRANCH COCKTAILS" image1="cocktail2.png" image2="cocktail.png" top={true} />
      <Flavor item={flavors} />
      <InfoCard />
      <Footer />
    </div>
  );
};

export default Home;