import { EventEmitter } from 'node:events'
import { createAlert } from '../utils/createAlert.js'

export const sightingEvents = new EventEmitter()

console.log("Listener Registered")

sightingEvents.on('sighting-added', createAlert)