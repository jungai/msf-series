import { registerApplication, start, RegisterApplicationConfig } from 'single-spa'

export function loadApp (appName: string, options: Partial<RegisterApplicationConfig> = {}): RegisterApplicationConfig {
    return {
        name: appName,
        app: () => System.import(appName),
        activeWhen: () => true,
        ...options
    }
}

export const apps = [
    loadApp('@ag1/nav'),
    loadApp('@ag1/auth', { activeWhen: '/auth' }),
    loadApp('@ag1/home', { activeWhen: '/home' }),
].forEach(registerApplication)

start();