import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#0D0D0D',
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },

    Logo: {
        marginTop: 50,
        height: 50,
        width: 150,
        resizeMode: 'contain'
    },

    form:{
        width: '95%',
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input : {
        flex: 1,
        color: "#FFF",
        backgroundColor: '#1A1A1A',
        padding: 16,
        fontSize: 16,
        borderRadius: 5,
        marginRight: 10,
        height: 56,
    },

    btnAdd : {
        backgroundColor: '#1E6F9F',
        borderRadius: 5,
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center'
    },

    btnAddText: {
        color: '#FFF',
        fontSize: 30,

    },

    tasks:{
        flexDirection: 'row',
        marginTop:40,
        height: 50,
        margin: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10,

        borderBottomColor: 'rgba(0,0,0,0.3)',
        borderBottomWidth: 1,
        
    },

    tasksCreated:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4EA8DE',
        flexDirection: 'row',
    },

    tasksFinished: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8284FA',
        flexDirection: 'row',
    },

    listEmpty: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    listEmptyText: {
        color: '#adadad',
        fontSize: 16,
        marginTop: 10
    }
})