"use client"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import { Button } from '@/components/ui/button'
import React from 'react'

function Dashboard() {
  return (
    <div>Dashboard
      <Button><LogoutLink>Logout</LogoutLink></Button>
    </div>
  )
}

export default Dashboard