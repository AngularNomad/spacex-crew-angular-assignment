import { bootstrapApplication } from '@angular/platform-browser'; // This is used to start the app.
import { AppComponent } from './app/app.component'; // Our root component (the main one).
import { provideHttpClient } from '@angular/common/http';   // This sets up the HTTP client so we can make API calls.

// Bootstrap the application and provide HttpClient
bootstrapApplication(AppComponent, {
  providers: [provideHttpClient()]  // We're providing the HTTP client here, since HttpClientModule is deprecated.
})
.catch(err => console.error(err));  // If there’s any error bootstrapping the app, log it.
