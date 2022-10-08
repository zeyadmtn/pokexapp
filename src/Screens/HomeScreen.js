import React, { useEffect } from 'react';
import { StyleSheet, View } from "react-native";
import Realm from 'realm';
import HomeNavbar from "../HomeNavBar/HomeNavBar";
import PokemonList from "../HomePokemonList/PokemonList";

const AccountSchema = {
    name: "Account",
    properties: {
        email: "string",
        password: "string",
        favoritePokemon: "string",
    },
    primaryKey: "email",
};

const realm = new Realm({
    path: "accountRealm",
    schema: [AccountSchema],
});

function HomeScreen() {

    let mainAccount;

                //     realm.write(() => {
                //     mainAccount = realm.create("Account", {
                //         email: 'zeyadmtn@gmail.com',
                //         password: 'abc123',
                //         favoritePokemon: 'pokemonfav'

                //     })
                // })

    mainAccount = realm.objects("Account");
 console.log(`${mainAccount.map((acc) => acc.email)}`)

    useEffect(() => {

    }, [])


    return (
        <View style={styles.body}>

            {

                // realm.write(() => {
                //     task1 = realm.create("Task", {
                //         _id: 1,
                //         name: "go grocery shopping",
                //         status: "Open",
                //     });
                //     task2 = realm.create("Task", {
                //         _id: 2,
                //         name: "go exercise",
                //         status: "Open",
                //     });
                //     console.log(`created two tasks: ${task1.name} & ${task2.name}`);
                // });
                // realm.write(() => {
                //     mainAccount = realm.create("Account", {
                //         email: 'zeyadmtn@gmail.com',
                //         password: 'abc123',
                //         favoritePokemon: 'pokemonfav'

                //     })
                // })

                console.log()

            // console.log(`The lists of tasks are: ${tasks.map((task) => task.name)}`)

            }
            <HomeNavbar />
            <PokemonList />

        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white'
    },
})

export default HomeScreen;