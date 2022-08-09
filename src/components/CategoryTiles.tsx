import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    TouchableHighlight,
    RefreshControl,
} from "react-native";
import { Surface, Text, TouchableRipple, useTheme } from "react-native-paper";
import { FlatGrid } from "react-native-super-grid";
import { FoodInfo } from "../screens/Home";

function CategoryTiles(props: {
    data: any[];
    setFilters: (p: string[]) => void;
    filters: string[];
}) {
    const [categoryCounts, setCategoryCounts] = React.useState<{
        [category: string]: number;
    }>({});
    const [activeIndexes, setActiveIndexes] = React.useState<number[]>([]);
    const flatListRef = useRef<FlatList>(null);

    //THIS IS REALLY WEIRD WITH THE DATA STUFF
    useEffect(() => {
        const uniqueCategories = [
            ...new Set(props.data.map((a: { category: string }) => a.category)),
        ];

        const uniqueCategoriesCounts = uniqueCategories.reduce(
            (acc: { [category: string]: number }, category: string) => {
                acc[category] = props.data.filter(
                    (a: { category: string }) => a.category === category
                ).length;
                return acc;
            },
            {}
        );

        setCategoryCounts(uniqueCategoriesCounts);
    }, [props.data]);

    function handleCategoryTap(index: number, item: string) {
        if (activeIndexes.includes(index)) {
            setActiveIndexes([...activeIndexes.filter((i) => i !== index)]);
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
        if (props.filters.includes(item)) {
            props.setFilters(props.filters.filter((f) => f !== item));
        } else {
            props.setFilters([...props.filters, item]);
        }
    }

    return (
        <FlatList
            horizontal={true}
            data={Object.keys(categoryCounts)}
            showsHorizontalScrollIndicator={false}
            ref={flatListRef}
            contentContainerStyle={{
                marginVertical: 5,
            }}
            renderItem={({ item, index }) => (
                <Chip
                    selected={activeIndexes.includes(index)}
                    elevated
                    style={{
                        margin: 5,
                    }}
                    onPress={() => handleCategoryTap(index, item)}
                >
                    {item}
                </Chip>
            )}
        />
    );
}

export default CategoryTiles;
