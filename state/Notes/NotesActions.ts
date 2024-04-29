// export const getNotesAction = createAsyncThunk<{notes : Tnote[]}, void>(
//     'notes/getNotes',
//     async () => {
//         const token = await AsyncStorage.getItem('token')
//         const { data } = await axios.get('http://ensemc.irma-prod.net/api/etudiant/notes', {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         })
//         return data
//     }
// )