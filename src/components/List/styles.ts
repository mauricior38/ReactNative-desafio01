import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    tasksArea:{
        alignItems: 'center'
    },

    tasksBg: {
        backgroundColor: '#333333',
        width: '95%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 6,
        padding: 15,
        marginBottom: 6,
    },

    tasksText: {
        color: '#FFF',
        fontSize: 15
    },

    tasksTextChecked: {
        color: '#FFF',
        fontSize: 15,
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'dotted'
    }
    
})