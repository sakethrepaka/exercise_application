import React from 'react'
import { useState } from 'react'
import {Box} from '@mui/material'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])
  const [exercise, setExercise] = useState('')
  return (
    <Box>
        <HeroBanner/>
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} setExercise={setExercise}/>
        <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} exercise={exercise}/>
    </Box>
  )
}

export default Home