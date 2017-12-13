import { AuthEffect } from './auth.effect';
import { UsersEffect } from './user-managament.effect';

export const effects: any[] = [AuthEffect, UsersEffect];

export * from './auth.effect';