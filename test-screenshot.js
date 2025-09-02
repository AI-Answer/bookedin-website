const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Set viewport size
  await page.setViewportSize({ width: 1280, height: 720 });
  
  try {
    // Navigate to the local development server
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    // Wait a bit for any animations to settle
    await page.waitForTimeout(2000);
    
    // Take a screenshot
    await page.screenshot({ 
      path: 'website-screenshot.png', 
      fullPage: true 
    });
    
    console.log('Screenshot saved as website-screenshot.png');
    
    // Check for any console errors
    const logs = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        logs.push(msg.text());
      }
    });
    
    // Reload to catch any console errors
    await page.reload({ waitUntil: 'networkidle' });
    await page.waitForTimeout(1000);
    
    if (logs.length > 0) {
      console.log('Console errors found:');
      logs.forEach(log => console.log('- ' + log));
    } else {
      console.log('No console errors detected');
    }
    
    // Check if video is present
    const videoElement = await page.$('iframe[src*="wistia"]');
    if (videoElement) {
      console.log('✅ Wistia video iframe found');
    } else {
      console.log('❌ Wistia video iframe not found');
    }
    
    // Check if logo is present
    const logoElement = await page.$('img[alt="BookedIn"]');
    if (logoElement) {
      console.log('✅ BookedIn logo found');
    } else {
      console.log('❌ BookedIn logo not found');
    }
    
    // Check if particles are present
    const particlesElement = await page.$('canvas');
    if (particlesElement) {
      console.log('✅ Particles canvas found');
    } else {
      console.log('❌ Particles canvas not found');
    }
    
  } catch (error) {
    console.error('Error:', error);
  }
  
  await browser.close();
})();
