import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { SafeAreaView, Text } from "react-native";

const Home: React.FC = () => {
	const { data } = useQuery(["todos"], () => axios.get("https://jsonplaceholder.typicode.com/todos"));

	useEffect(() => console.log(data), [data]);

	return (
		<SafeAreaView className="h-full w-full flex justify-center items-center bg-black">
			<Text className="text-4xl text-white">Barebone!</Text>
		</SafeAreaView>
	);
};

export default Home;
