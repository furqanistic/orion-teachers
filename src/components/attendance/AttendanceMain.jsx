import React from 'react'
import StudentData from './StudentData'
import styled from 'styled-components'
import GenderGraph from './GenderGraph'
import AttendanceForm from './AttendanceForm'
import AttendaceAllClasses from './AttendaceAllClasses'

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const AttendanceMain = () => {
  return (
    <>
      <PageWrapper>
        <AttendanceForm />
        <StudentData />
        <GenderGraph />
      </PageWrapper>
      <AttendaceAllClasses />
    </>
  )
}

export default AttendanceMain
