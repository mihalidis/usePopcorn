import { useEffect, useState } from "react"

export function useLocalStorageState (initialState, storeName) {
  const [data, setData] = useState(function () {
    const storedData = localStorage.getItem(storeName)
    return storedData ? JSON.parse(storedData) : initialState
  })

  useEffect(function () {
    localStorage.setItem(storeName, JSON.stringify(data))
  }, [storeName, data])

  return [data, setData]
}