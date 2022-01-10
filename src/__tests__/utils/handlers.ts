import { rest } from 'msw'
import multipleBeers from '../mocks/multipleBeers.json'

const multipleBeersHandler = rest.get('*/beers', async (req, res, ctx) =>
  res(ctx.json(multipleBeers))
)

export const noBeersHandler = rest.get('*/beers', async (req, res, ctx) =>
  res(ctx.json([]))
)

export const beersExceptionHandler = rest.get(
  '*/beers',
  async (req, res, ctx) =>
    res(ctx.status(500), ctx.json({ message: 'Broken Request' }))
)

export const delayedBeersHandler = rest.get(
  '*/beers',
  async (req, res, ctx) => {
    return res(ctx.delay(5000), ctx.json(multipleBeers))
  }
)

export const handlers = [multipleBeersHandler]
