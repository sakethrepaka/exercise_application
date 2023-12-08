import React,{useEffect, useState} from 'react'
import { Pagination } from '@mui/material'
import {Box,Stack,Typography} from '@mui/material'
import ExerciseCard from './ExerciseCard'

import { exerciseOptions,fetchData } from '../utils/fetchData'
const Exercises = ({exercises,setExercises,bodyPart,exercise}) => {

  const [currentPage, setCurrentPage] = useState(1)
  const exerciesPerPage =9

  const indexOfLastExercise = currentPage*exerciesPerPage

  const indexOfFirstExercise = indexOfLastExercise -exerciesPerPage

  const currentExercises = Array.isArray(exercises) ? exercises.slice(indexOfFirstExercise, indexOfLastExercise) : [];


  const paginate = (e,value) =>{
    setCurrentPage(value)

    window.scrollTo({top:1800,behavior:'smooth'})

  }

  useEffect(()=>{
    const fetchExercisesData = async()=>{
      let exercisesData = []

      if(bodyPart==='all')
      {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1000', exerciseOptions)
        
      }
      else{
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions)
      }

      setExercises(exercisesData)
    }

    fetchExercisesData()

  },[bodyPart])

  console.log(exercises)
  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px'
    >
      <Typography variant='h3' mb='46px' >
        Showing Results for {exercise}
      </Typography>
      <Stack direction='row' sx={{gap:{lg:'110px',xs:'50px'}}} flexWrap='wrap' justifyContent='center'>
          {currentExercises.map((exercise,index)=>(
              <ExerciseCard key={index} exercise={exercise}></ExerciseCard>

          ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
            {exercises.length>9 && (<Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length/exerciesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
            />)}
      </Stack>
    </Box>
  )
}

export default Exercises