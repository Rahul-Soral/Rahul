export const deg2rad = (deg: number): number => deg * (Math.PI / 180)

export const getDistanceFromLots = (userLocation: [number, number] | null, lotsRajasthanCoords: [number, number]): string => {
  if (!userLocation) return "Unknown"
  const [lat1, lon1] = userLocation
  const [lat2, lon2] = lotsRajasthanCoords
  const R = 6371
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = R * c
  return `${Math.round(distance)} km`
}
