export const getDeadline = () => {
  const deadline = new Date()
  deadline.setHours(deadline.getHours() + 1)

  return Math.floor(new Date().getTime() / 1000.0)
}