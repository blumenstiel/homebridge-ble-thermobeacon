// Auto-generated by "code-generation/config-scheme-gen.js", don’t manually edit

import { z } from 'zod'

export const ConfigBoundary = z.object({
    debug: z.boolean().default(false),
    buttonAsLock: z
        .boolean()
        .describe('Pressed button is presented as unlocked, otherwise locked. Can help identify the beacon')
        .default(false),
    devices: z
        .array(
            z.object({
                address: z
                    .string()
                    .regex(
                        new RegExp(
                            '^(([0-9a-fA-F]{8}-?)([0-9a-fA-F]{4}-?){3}([0-9a-fA-F]{12}-?)|([0-9a-fA-F]{2}:?){5}[0-9a-fA-F]{2})$',
                        ),
                    )
                    .describe('Bluetooth address of the thermometer. MAC address on Linux, UUID on Mac'),
                name: z.string().describe('Specify a name for the thermometer in Homebridge'),
                buttonAsLock: z
                    .boolean()
                    .describe('Per device settings to publish button pressed state as a lock')
                    .optional(),
            }),
        )
        .default([]),
})
