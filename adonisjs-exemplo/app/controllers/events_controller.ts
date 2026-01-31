import type { HttpContext } from '@adonisjs/core/http'
import Event from '#models/event'

export default class EventsController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const data = request.only(['name'])
    const event = await Event.create(data)
    return event
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const event = await Event.findOrFail(params.id)
    return event
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
