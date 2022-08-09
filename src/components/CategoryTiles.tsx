import React, { useEffect, useRef } from "react";
import { FlatList } from "react-native";
import { Chip, Divider, Searchbar, useTheme } from "react-native-paper";

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
    const theme = useTheme();

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

    const [searchQuery, setSearchQuery] = React.useState("");

    const onChangeSearch = (query: string) => setSearchQuery(query);

    return (
        <>
            <Searchbar
                placeholder="Search..."
                onChangeText={onChangeSearch}
                value={searchQuery}
                placeholderTextColor={"#b1b1b1"}
            />
            <FlatList
                horizontal={true}
                data={Object.keys(categoryCounts)}
                showsHorizontalScrollIndicator={false}
                ref={flatListRef}
                contentContainerStyle={{
                    paddingVertical: 5,
                    backgroundColor: theme.colors.primaryContainer,
                }}
                renderItem={({ item, index }) => (
                    <Chip
                        selected={activeIndexes.includes(index)}
                        style={{
                            margin: 5,
                        }}
                        mode="outlined"
                        elevated
                        onPress={() => handleCategoryTap(index, item)}
                    >
                        {item}
                    </Chip>
                )}
            />
            <Divider bold />
        </>
    );
}

export default CategoryTiles;
