import React, { useEffect, useState } from 'react'

import { Box, Button, Stack, TextField, Typography } from '@mui/material'

import { fetchData, exerciseOptions } from '../utils/fetchData'
import HorizantalScrollbar from './HorizantalScrollbar'
const SearchExercises = ({setExercises,bodyPart,setBodyPart,setExercise}) => {

  const [search, setSearch] = useState("")
  
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{

    const fetchExercisesData = async ()=>{
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)

        setBodyParts(['all',...bodyPartsData])
    
      }

      fetchExercisesData()
  },[])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions)

      const searchedExercises = exercisesData.filter((exercise) => {
         return( exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search))
      })

      setSearch('')
      setExercises(searchedExercises)
    }
  }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight='700' sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb='50px' textAlign='center'>
        Awesome Exercises You <br />
        Should know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: 800,
              border: 'none', borderRadius: '4px'
            },
            width: { lg: '800px', xs: '350px' },
            borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => {setSearch(e.target.value.toLowerCase())
          setExercise(e.target.value.toLowerCase())}}
          placeholder='Search for your exercise'>

        </TextField>
        <Button className='search-btn'
          sx={{
            bgcolor: "#ff2625",
            color: '#fff',
            textTransform: "none",
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: 0
          }}
          onClick={handleSearch}>Search</Button>
      </Box>

      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
            <HorizantalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart ={setBodyPart}/>
      </Box>
    </Stack>
  )
}

export default SearchExercises