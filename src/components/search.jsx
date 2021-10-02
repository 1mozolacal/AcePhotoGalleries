import React, {useState} from "react"
import { TextField, Grid, Button } from "@material-ui/core"



const Search = (props) => {
    const { size, limit, lookupAgainst, callBack} = props

    const [value,setValue] = useState('')
    const [results,setResults] = useState([])

    const handleChange = (e) => {
        // New time square
        const searchValue = e.target.value.toLowerCase()
        setValue(e.target.value)

        const orderedValues = Object.entries(lookupAgainst).map( ([key,value],index) => {
            const {paypalID,title} = value
            var ordering = 0
            if(key.toLowerCase().startsWith(searchValue)){
                ordering = Math.max(ordering, searchValue.length)
            }

            if(paypalID.toLowerCase().startsWith(searchValue)){
                ordering = Math.max(ordering, searchValue.length)
            }
            
            const titleWords = title.toLowerCase().split(" ")
            const searchWords = searchValue.toLowerCase().split(" ")
            var wordMatchValue = 0
            searchWords.forEach( ele => {
                if(titleWords.includes(ele)){
                    wordMatchValue += ele.length
                }
            })
            ordering = Math.max(ordering,wordMatchValue)
            
            return [key,ordering]
        })
        setResults(orderedValues)
    }

    return (
        <Grid container style={{background: "white", color: "black"}}>
            <h1>Search</h1>
            <Grid item xs={12}>
                <TextField
                    label="Search"
                    type="text"
                    fullWidth
                    value={value}
                    onChange={handleChange} />
            </Grid> 
         {results.sort( (first,second) => second[1]-first[1]).map( ( [item,ordering],index) => {
             if (index>= (limit||10) || (ordering <=0) ){
                return undefined
             }
             return (<Grid item xs={size || 12}>
                 <Button onClick={() => callBack(item)}>{lookupAgainst[item]['title']} </Button>
             </Grid>)
         } )}
        </Grid>
    )
}

export default Search