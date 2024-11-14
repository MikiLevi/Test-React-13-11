import { useEffect, useState } from "react";

export interface IMissile extends Document {
	name: string;
	description: string;
	speed: number;
	intercepts: [{ type: string }];
	price: number;
}

const Store = () => {
	const [store, setStore] = useState<IMissile[]>([])

	useEffect(() => {
		fetch("")
			.then((response) => response.json())
			.then((data) => setStore(data))
			.catch((error) => console.error("Error fetching data:", error));

	}, []);


	return (
		<div>Store</div>
	)
}

export default Store