/// <reference types="jest" />

import { fireEvent, renderRouter, screen, waitFor } from 'expo-router/testing-library';

import DetailsScreen from '../src/app/details';
import HomeScreen from '../src/app/index';

describe('navegación principal', () => {
  it('abre el detalle desde la ruta inicial', async () => {
    const router = renderRouter(
      {
        index: HomeScreen,
        details: DetailsScreen,
      },
      { initialUrl: '/' },
    );
    await Promise.resolve(router as unknown as Promise<unknown>);

    expect(router.getPathname()).toBe('/');

    const navigationControl = screen.getByRole('link', {
      name: 'Comprobar la navegación',
    });
    expect(navigationControl).toBeOnTheScreen();

    await fireEvent.press(navigationControl);

    await waitFor(() => expect(router.getPathname()).toBe('/details'));
    expect(screen.getByText('La navegación funciona.')).toBeOnTheScreen();
  });
});
