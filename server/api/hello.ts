import prisma from "~/utils/script";

// h3 an http server framework
export default defineEventHandler(async(event) => {


  const user = await prisma.user.create({
    data: {
      name: 'ben',
      email: 'benx@prisma.io',
      password: 'password',
      role: 'admin'
    },
  })

    // return {
    //   message: 'Hello, World! from the server!',
    // };


      // Log event. `.toString()` stringifies to a simple string like `[GET] /<path>`
  console.log(`Request: ${event.toString()}`);

  // Parse query params
  const query = getQuery(event)

  // Try to read request body
  const {some} = await readBody(event)
  // .catch(() => {})

  // Echo back request as response
  return {
    // path: event.path,
    // method: event.method,
    // query,
    some:some,
    user:user
  }

  });




  
