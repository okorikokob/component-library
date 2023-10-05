import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
    const {van} = useOutletContext()
  return (
    <div><img
    src={van.imageUrl}
    alt={van.name}
    style={{ width: "30%" }}
  /></div>
  )
}

export default HostVanPhotos