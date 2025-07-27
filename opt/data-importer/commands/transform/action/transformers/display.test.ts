import { assertEquals } from 'jsr:@std/assert';
import { describe, it } from 'jsr:@std/testing/bdd';
import { Display, toDisplay } from './display.ts';

describe('toDisplay', () => {
  const testCaseas: Array<{ input: string; expected: Display }> = [
    // 12.5" FHD (1920x1080) IPS
    {
      input: '12.5" FHD (1920x1080) IPS',
      expected: {
        size: '12.5',
        resolution: { name: 'FHD', width: 1920, height: 1080 },
        panelType: 'IPS',
      },
    },
    // 12.5" FHD (1920x1080) IPS 300nits Anti-glare
    {
      input: '12.5" FHD (1920x1080) IPS 300nits Anti-glare',
      expected: {
        size: '12.5',
        resolution: { name: 'FHD', width: 1920, height: 1080 },
        panelType: 'IPS',
        brightness: { value: '300', unit: 'nits' },
        antiGlare: true,
      },
    },
    // 12.5" FHD (1920x1080) WVA 300nits Anti-glare
    {
      input: '12.5" FHD (1920x1080) WVA 300nits Anti-glare',
      expected: {
        size: '12.5',
        resolution: { name: 'FHD', width: 1920, height: 1080 },
        panelType: 'WVA',
        brightness: { value: '300', unit: 'nits' },
        antiGlare: true,
      },
    },
    // 12.5" HD (1366x768)
    {
      input: '12.5" HD (1366x768)',
      expected: {
        size: '12.5',
        resolution: { name: 'HD', width: 1366, height: 768 },
      },
    },
    // 12.5" HD (1366x768) IPS
    {
      input: '12.5" HD (1366x768) IPS',
      expected: {
        size: '12.5',
        resolution: { name: 'HD', width: 1366, height: 768 },
        panelType: 'IPS',
      },
    },
    //  12.5" HD (1366x768) IPS 300nits Anti-glare
    {
      input: '12.5" HD (1366x768) IPS 300nits Anti-glare',
      expected: {
        size: '12.5',
        resolution: { name: 'HD', width: 1366, height: 768 },
        panelType: 'IPS',
        brightness: { value: '300', unit: 'nits' },
        antiGlare: true,
      },
    },
    //  12.5" HD (1366x768) TN 220nits Anti-glare
    {
      input: '12.5" HD (1366x768) TN 220nits Anti-glare',
      expected: {
        size: '12.5',
        resolution: { name: 'HD', width: 1366, height: 768 },
        panelType: 'TN',
        brightness: { value: '220', unit: 'nits' },
        antiGlare: true,
      },
    },
    //  14" FHD (1920x1080) IPS
    {
      input: '14" FHD (1920x1080) IPS',
      expected: {
        size: '14',
        resolution: { name: 'FHD', width: 1920, height: 1080 },
        panelType: 'IPS',
      },
    },
    //  14" FHD (1920x1080) IPS 250nits Anti-glare
    {
      input: '14" FHD (1920x1080) IPS 250nits Anti-glare',
      expected: {
        size: '14',
        resolution: { name: 'FHD', width: 1920, height: 1080 },
        panelType: 'IPS',
        brightness: { value: '250', unit: 'nits' },
        antiGlare: true,
      },
    },
    //  14" FHD (1920x1080) WVA 250nits Anti-glare
    {
      input: '14" FHD (1920x1080) WVA 250nits Anti-glare',
      expected: {
        size: '14',
        resolution: { name: 'FHD', width: 1920, height: 1080 },
        panelType: 'WVA',
        brightness: { value: '250', unit: 'nits' },
        antiGlare: true,
      },
    },
    //  14" FHD (1920x1080) WVA 250nits Anti-glare
    {
      input: '14" FHD (1920x1080) WVA 250nits Anti-glare',
      expected: {
        size: '14',
        resolution: { name: 'FHD', width: 1920, height: 1080 },
        panelType: 'WVA',
        brightness: { value: '250', unit: 'nits' },
        antiGlare: true,
      },
    },
    //  ThinkPad Privacy Guard, 14" HD (1366x768)
    {
      input: 'ThinkPad Privacy Guard, 14" HD (1366x768)',
      expected: {
        size: '14',
        resolution: { name: 'HD', width: 1366, height: 768 },
        privacyGuard: true,
      },
    },
    //  14" HD (1366x768) TN 220nits Anti-glare
    {
      input: '14" HD (1366x768) TN 220nits Anti-glare',
      expected: {
        size: '14',
        resolution: { name: 'HD', width: 1366, height: 768 },
        panelType: 'TN',
        brightness: { value: '220', unit: 'nits' },
        antiGlare: true,
      },
    },
    //  14" HD+ (1600x900)
    {
      input: '14" HD+ (1600x900)',
      expected: {
        size: '14',
        resolution: { name: 'HD+', width: 1600, height: 900 },
      },
    },
    //  14" WQHD (2560x1440) IPS
    {
      input: '14" WQHD (2560x1440) IPS',
      expected: {
        size: '14',
        resolution: { name: 'WQHD', width: 2560, height: 1440 },
        panelType: 'IPS',
      },
    },
    //  14" WQHD (2560x1440) IPS 300nits Anti-glare
    {
      input: '14" WQHD (2560x1440) IPS 300nits Anti-glare',
      expected: {
        size: '14',
        resolution: { name: 'WQHD', width: 2560, height: 1440 },
        panelType: 'IPS',
        brightness: { value: '300', unit: 'nits' },
        antiGlare: true,
      },
    },
    //  14" WQHD (2560x1440) WVA 300nits Anti-glare
    {
      input: '14" WQHD (2560x1440) WVA 300nits Anti-glare',
      expected: {
        size: '14',
        resolution: { name: 'WQHD', width: 2560, height: 1440 },
        panelType: 'WVA',
        brightness: { value: '300', unit: 'nits' },
        antiGlare: true,
      },
    },
  ];
  testCaseas.forEach(({ input, expected }) => {
    it(`should parse "${input}" correctly`, () => {
      // Act
      const result = toDisplay(input);

      // Assert
      assertEquals(result, expected);
    });
  });
});
