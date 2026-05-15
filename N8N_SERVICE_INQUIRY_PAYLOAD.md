# n8n Service Inquiry Payload

The service inquiry form posts JSON to:

```text
https://automate.eyelevelstudio.in/webhook/njmascon-form
```

## Payload

```json
{
  "formType": "service-inquiry",
  "source": "service-page",
  "submittedAt": "2026-05-02T10:30:00.000Z",
  "pageUrl": "https://njmacson.com/services/alternative-investments",
  "name": "Client Name",
  "email": "client@email.com",
  "message": "I want to discuss investment options.",
  "service": "Alternative Investments",
  "serviceKey": "alternative-investments",
  "servicePath": "/services/alternative-investments",
  "lead": {
    "name": "Client Name",
    "email": "client@email.com",
    "message": "I want to discuss investment options."
  },
  "serviceDetails": {
    "key": "alternative-investments",
    "label": "Alternative Investments",
    "path": "/services/alternative-investments"
  }
}
```

## n8n Expressions

Use these in email, Google Sheets, CRM, or notification nodes:

```text
Name: {{$json.name}}
Email: {{$json.email}}
Message: {{$json.message}}
Service: {{$json.service}}
Service Key: {{$json.serviceKey}}
Service Page: {{$json.pageUrl}}
Submitted At: {{$json.submittedAt}}
Source: {{$json.source}}
Form Type: {{$json.formType}}
```

Nested alternatives are also available:

```text
Lead Name: {{$json.lead.name}}
Service Label: {{$json.serviceDetails.label}}
Service Path: {{$json.serviceDetails.path}}
```

## Email Subject

```text
New {{$json.service}} Consultation Request - {{$json.name}}
```

## Email Body

```html
<h2>New Service Consultation Request</h2>

<p><strong>Service:</strong> {{$json.service}}</p>
<p><strong>Name:</strong> {{$json.name}}</p>
<p><strong>Email:</strong> {{$json.email}}</p>
<p><strong>Message:</strong><br />{{$json.message}}</p>

<hr />

<p><strong>Page:</strong> {{$json.pageUrl}}</p>
<p><strong>Submitted:</strong> {{$json.submittedAt}}</p>
<p><strong>Source:</strong> {{$json.source}}</p>
```
