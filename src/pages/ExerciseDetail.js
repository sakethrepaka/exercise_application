import React from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

import {exerciseOptions,fetchData} from '../utils/fetchData'
const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams()

  useEffect(()=>{

    const fetchExercisesData = async() =>{

    }

    fetchExercisesData()

  },[id])

  
  return (
    <Box>
      <Detail exerciseDetail ={exerciseDetail}/>
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail