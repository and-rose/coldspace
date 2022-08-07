import { Appbar } from "react-native-paper";

function CustomAppBar(props: any) {
    return (
        <Appbar.Header>
            <Appbar.Content title={props} />
        </Appbar.Header>
    );
}

export default CustomAppBar;
