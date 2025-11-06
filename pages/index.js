import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <Head>
        <title>YouTube Automation Workflow - n8n</title>
        <meta name="description" content="Complete YouTube end-to-end automation workflow for n8n" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🎥</text></svg>" />
      </Head>

      <div style={styles.container}>
        <header style={styles.header}>
          <div style={styles.headerContent}>
            <h1 style={styles.title}>🎥 YouTube Automation Workflow</h1>
            <p style={styles.subtitle}>Complete end-to-end automation for n8n</p>
          </div>
        </header>

        <nav style={styles.nav}>
          <button
            style={{...styles.tab, ...(activeTab === 'overview' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            style={{...styles.tab, ...(activeTab === 'workflow' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('workflow')}
          >
            Workflow JSON
          </button>
          <button
            style={{...styles.tab, ...(activeTab === 'webhook' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('webhook')}
          >
            Webhook API
          </button>
          <button
            style={{...styles.tab, ...(activeTab === 'setup' ? styles.activeTab : {})}}
            onClick={() => setActiveTab('setup')}
          >
            Setup Guide
          </button>
        </nav>

        <main style={styles.main}>
          {activeTab === 'overview' && <OverviewTab />}
          {activeTab === 'workflow' && <WorkflowTab />}
          {activeTab === 'webhook' && <WebhookTab />}
          {activeTab === 'setup' && <SetupTab />}
        </main>

        <footer style={styles.footer}>
          <p>Built for n8n automation platform • Ready to import and use</p>
        </footer>
      </div>
    </>
  );
}

function OverviewTab() {
  return (
    <div style={styles.content}>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>✨ Features</h2>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📤</div>
            <h3 style={styles.featureTitle}>Video Upload</h3>
            <ul style={styles.featureList}>
              <li>Webhook trigger for external integrations</li>
              <li>Automated validation and error handling</li>
              <li>Custom thumbnail support</li>
              <li>SEO optimization</li>
            </ul>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>📊</div>
            <h3 style={styles.featureTitle}>Analytics</h3>
            <ul style={styles.featureList}>
              <li>Scheduled statistics collection (24h)</li>
              <li>Google Sheets export</li>
              <li>PostgreSQL logging</li>
              <li>View, like, comment tracking</li>
            </ul>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🔔</div>
            <h3 style={styles.featureTitle}>Notifications</h3>
            <ul style={styles.featureList}>
              <li>Slack channel updates</li>
              <li>HTML email notifications</li>
              <li>Real-time upload alerts</li>
              <li>Error reporting</li>
            </ul>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⏰</div>
            <h3 style={styles.featureTitle}>Scheduling</h3>
            <ul style={styles.featureList}>
              <li>Schedule publication times</li>
              <li>Privacy status management</li>
              <li>Automated publishing</li>
              <li>Time zone support</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📋 Workflow Nodes</h2>
        <div style={styles.nodeList}>
          <div style={styles.nodeCategory}>
            <h3 style={styles.nodeCategoryTitle}>Triggers</h3>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>Schedule Trigger</span>
              <span style={styles.nodeDesc}>Runs every 24 hours for analytics</span>
            </div>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>Webhook</span>
              <span style={styles.nodeDesc}>Receives upload requests</span>
            </div>
          </div>

          <div style={styles.nodeCategory}>
            <h3 style={styles.nodeCategoryTitle}>Core Operations</h3>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>Validate Input</span>
              <span style={styles.nodeDesc}>Checks required fields</span>
            </div>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>YouTube Upload</span>
              <span style={styles.nodeDesc}>Uploads video with metadata</span>
            </div>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>SEO Optimizer</span>
              <span style={styles.nodeDesc}>Enhances titles, descriptions, tags</span>
            </div>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>Upload Thumbnail</span>
              <span style={styles.nodeDesc}>Sets custom thumbnail</span>
            </div>
          </div>

          <div style={styles.nodeCategory}>
            <h3 style={styles.nodeCategoryTitle}>Data Management</h3>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>List My Videos</span>
              <span style={styles.nodeDesc}>Retrieves channel videos</span>
            </div>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>Process Video Stats</span>
              <span style={styles.nodeDesc}>Extracts analytics data</span>
            </div>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>Save to Google Sheets</span>
              <span style={styles.nodeDesc}>Exports to spreadsheet</span>
            </div>
            <div style={styles.nodeItem}>
              <span style={styles.nodeName}>Save to Database</span>
              <span style={styles.nodeDesc}>Stores in PostgreSQL</span>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🚀 Quick Start</h2>
        <div style={styles.stepList}>
          <div style={styles.step}>
            <div style={styles.stepNumber}>1</div>
            <div style={styles.stepContent}>
              <h3 style={styles.stepTitle}>Download Workflow</h3>
              <p style={styles.stepDesc}>Download the <code style={styles.code}>youtube-automation-workflow.json</code> file</p>
            </div>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>2</div>
            <div style={styles.stepContent}>
              <h3 style={styles.stepTitle}>Import to n8n</h3>
              <p style={styles.stepDesc}>Open n8n and import the JSON workflow file</p>
            </div>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>3</div>
            <div style={styles.stepContent}>
              <h3 style={styles.stepTitle}>Configure Credentials</h3>
              <p style={styles.stepDesc}>Set up YouTube OAuth2, Google Sheets, Slack, and email credentials</p>
            </div>
          </div>
          <div style={styles.step}>
            <div style={styles.stepNumber}>4</div>
            <div style={styles.stepContent}>
              <h3 style={styles.stepTitle}>Activate & Test</h3>
              <p style={styles.stepDesc}>Activate the workflow and test with a webhook request</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function WorkflowTab() {
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/youtube-automation-workflow.json';
    link.download = 'youtube-automation-workflow.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = async () => {
    try {
      const response = await fetch('/youtube-automation-workflow.json');
      const json = await response.text();
      await navigator.clipboard.writeText(json);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div style={styles.content}>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📄 Workflow JSON File</h2>
        <p style={styles.text}>
          This is the complete n8n workflow in JSON format. Import it directly into your n8n instance.
        </p>

        <div style={styles.buttonGroup}>
          <button style={styles.primaryButton} onClick={handleDownload}>
            ⬇️ Download JSON
          </button>
          <button style={styles.secondaryButton} onClick={handleCopy}>
            {copied ? '✅ Copied!' : '📋 Copy to Clipboard'}
          </button>
        </div>

        <div style={styles.codeBlock}>
          <pre style={styles.pre}>
            <code style={styles.codeContent}>
{`{
  "name": "YouTube End-to-End Automation",
  "nodes": [
    {
      "name": "Schedule Trigger",
      "type": "n8n-nodes-base.scheduleTrigger",
      "parameters": {
        "rule": {
          "interval": [{"field": "hours", "hoursInterval": 24}]
        }
      }
    },
    {
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "/youtube-webhook"
      }
    },
    // ... 20+ more nodes for complete automation
  ],
  "connections": {
    // Fully connected workflow
  }
}`}
            </code>
          </pre>
        </div>

        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>ℹ️ What's Included</h3>
          <ul style={styles.list}>
            <li>20+ pre-configured nodes</li>
            <li>Complete connection mapping</li>
            <li>Error handling logic</li>
            <li>SEO optimization code</li>
            <li>Analytics processing script</li>
            <li>Notification templates</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

function WebhookTab() {
  const [formData, setFormData] = useState({
    title: 'My Awesome Video',
    description: 'This is an amazing video about...',
    tags: 'youtube, automation, n8n',
    filePath: '/path/to/video.mp4',
    privacyStatus: 'private',
    categoryId: '22'
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const generateJSON = () => {
    return JSON.stringify({
      title: formData.title,
      description: formData.description,
      tags: formData.tags.split(',').map(t => t.trim()),
      filePath: formData.filePath,
      privacyStatus: formData.privacyStatus,
      categoryId: formData.categoryId,
      thumbnailUrl: "https://example.com/thumbnail.jpg",
      scheduledPublishTime: "2025-11-10T15:00:00Z",
      notifyEmail: "admin@yourdomain.com"
    }, null, 2);
  };

  return (
    <div style={styles.content}>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🔌 Webhook API</h2>
        <p style={styles.text}>
          Send video upload requests to your n8n webhook endpoint using this API format.
        </p>

        <div style={styles.apiSection}>
          <h3 style={styles.apiTitle}>Endpoint</h3>
          <div style={styles.endpoint}>
            <span style={styles.method}>POST</span>
            <code style={styles.url}>https://your-n8n-instance.com/webhook/youtube-webhook</code>
          </div>
        </div>

        <div style={styles.apiSection}>
          <h3 style={styles.apiTitle}>Request Body</h3>
          <div style={styles.formGroup}>
            <label style={styles.label}>Title *</label>
            <input
              style={styles.input}
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Video title"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Description</label>
            <textarea
              style={{...styles.input, ...styles.textarea}}
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Video description"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Tags (comma-separated)</label>
            <input
              style={styles.input}
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="tag1, tag2, tag3"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>File Path *</label>
            <input
              style={styles.input}
              name="filePath"
              value={formData.filePath}
              onChange={handleChange}
              placeholder="/path/to/video.mp4"
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Privacy Status</label>
            <select
              style={styles.input}
              name="privacyStatus"
              value={formData.privacyStatus}
              onChange={handleChange}
            >
              <option value="private">Private</option>
              <option value="public">Public</option>
              <option value="unlisted">Unlisted</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Category ID</label>
            <input
              style={styles.input}
              name="categoryId"
              value={formData.categoryId}
              onChange={handleChange}
              placeholder="22"
            />
          </div>
        </div>

        <div style={styles.apiSection}>
          <h3 style={styles.apiTitle}>Generated JSON</h3>
          <div style={styles.codeBlock}>
            <pre style={styles.pre}>
              <code style={styles.codeContent}>{generateJSON()}</code>
            </pre>
          </div>
        </div>

        <div style={styles.apiSection}>
          <h3 style={styles.apiTitle}>cURL Example</h3>
          <div style={styles.codeBlock}>
            <pre style={styles.pre}>
              <code style={styles.codeContent}>{`curl -X POST https://your-n8n-instance.com/webhook/youtube-webhook \\
  -H "Content-Type: application/json" \\
  -d '${generateJSON().replace(/\n/g, '\n  ')}'`}</code>
            </pre>
          </div>
        </div>

        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>📝 Field Reference</h3>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Field</th>
                <th style={styles.th}>Required</th>
                <th style={styles.th}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}><code style={styles.code}>title</code></td>
                <td style={styles.td}>✅ Yes</td>
                <td style={styles.td}>Video title (max 100 chars)</td>
              </tr>
              <tr>
                <td style={styles.td}><code style={styles.code}>filePath</code></td>
                <td style={styles.td}>✅ Yes</td>
                <td style={styles.td}>Absolute path to video file</td>
              </tr>
              <tr>
                <td style={styles.td}><code style={styles.code}>description</code></td>
                <td style={styles.td}>No</td>
                <td style={styles.td}>Video description (enhanced by SEO)</td>
              </tr>
              <tr>
                <td style={styles.td}><code style={styles.code}>tags</code></td>
                <td style={styles.td}>No</td>
                <td style={styles.td}>Array of tags (max 15)</td>
              </tr>
              <tr>
                <td style={styles.td}><code style={styles.code}>privacyStatus</code></td>
                <td style={styles.td}>No</td>
                <td style={styles.td}>private, public, or unlisted</td>
              </tr>
              <tr>
                <td style={styles.td}><code style={styles.code}>categoryId</code></td>
                <td style={styles.td}>No</td>
                <td style={styles.td}>YouTube category ID (default: 22)</td>
              </tr>
              <tr>
                <td style={styles.td}><code style={styles.code}>thumbnailUrl</code></td>
                <td style={styles.td}>No</td>
                <td style={styles.td}>URL to custom thumbnail</td>
              </tr>
              <tr>
                <td style={styles.td}><code style={styles.code}>scheduledPublishTime</code></td>
                <td style={styles.td}>No</td>
                <td style={styles.td}>ISO 8601 datetime for scheduling</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function SetupTab() {
  return (
    <div style={styles.content}>
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>⚙️ Setup Guide</h2>

        <div style={styles.setupStep}>
          <h3 style={styles.setupStepTitle}>1. Import Workflow</h3>
          <ol style={styles.list}>
            <li>Open your n8n instance</li>
            <li>Click "Import from File" or "Import from URL"</li>
            <li>Select the <code style={styles.code}>youtube-automation-workflow.json</code> file</li>
            <li>Click "Import"</li>
          </ol>
        </div>

        <div style={styles.setupStep}>
          <h3 style={styles.setupStepTitle}>2. Configure YouTube API</h3>
          <ol style={styles.list}>
            <li>Go to <a href="https://console.cloud.google.com" target="_blank" rel="noopener noreferrer" style={styles.link}>Google Cloud Console</a></li>
            <li>Create a new project or select an existing one</li>
            <li>Enable YouTube Data API v3</li>
            <li>Create OAuth 2.0 credentials:
              <ul style={styles.subList}>
                <li>Application type: Web application</li>
                <li>Authorized redirect URIs: Your n8n OAuth callback URL</li>
              </ul>
            </li>
            <li>Copy Client ID and Client Secret</li>
            <li>In n8n, add "YouTube OAuth2 API" credentials with these values</li>
            <li>Complete OAuth flow to authorize access</li>
          </ol>
        </div>

        <div style={styles.setupStep}>
          <h3 style={styles.setupStepTitle}>3. Configure Google Sheets (Optional)</h3>
          <ol style={styles.list}>
            <li>Enable Google Sheets API in Google Cloud Console</li>
            <li>Use same OAuth2 credentials or create new ones</li>
            <li>Create a Google Sheet for analytics data</li>
            <li>Update Sheet ID in "Save to Google Sheets" node</li>
            <li>Add column headers: videoId, title, publishedAt, viewCount, likeCount, commentCount, thumbnailUrl</li>
          </ol>
        </div>

        <div style={styles.setupStep}>
          <h3 style={styles.setupStepTitle}>4. Configure Slack (Optional)</h3>
          <ol style={styles.list}>
            <li>Create a Slack App at <a href="https://api.slack.com/apps" target="_blank" rel="noopener noreferrer" style={styles.link}>api.slack.com/apps</a></li>
            <li>Add Bot Token Scopes: <code style={styles.code}>chat:write</code>, <code style={styles.code}>chat:write.public</code></li>
            <li>Install app to your workspace</li>
            <li>Copy Bot User OAuth Token</li>
            <li>In n8n, add "Slack API" credentials with the token</li>
            <li>Update channel name in "Slack Notification" node</li>
          </ol>
        </div>

        <div style={styles.setupStep}>
          <h3 style={styles.setupStepTitle}>5. Configure Email (Optional)</h3>
          <ol style={styles.list}>
            <li>Get SMTP server details from your email provider</li>
            <li>In n8n, add "SMTP" credentials:
              <ul style={styles.subList}>
                <li>Host: smtp.yourprovider.com</li>
                <li>Port: 587 (TLS) or 465 (SSL)</li>
                <li>Username: your email</li>
                <li>Password: your password or app password</li>
              </ul>
            </li>
            <li>Update sender email in "Email Notification" node</li>
          </ol>
        </div>

        <div style={styles.setupStep}>
          <h3 style={styles.setupStepTitle}>6. Configure PostgreSQL (Optional)</h3>
          <ol style={styles.list}>
            <li>Set up a PostgreSQL database</li>
            <li>Create the analytics table:</li>
          </ol>
          <div style={styles.codeBlock}>
            <pre style={styles.pre}>
              <code style={styles.codeContent}>{`CREATE TABLE video_analytics (
  id SERIAL PRIMARY KEY,
  video_id VARCHAR(255) NOT NULL,
  title TEXT,
  published_at TIMESTAMP,
  privacy_status VARCHAR(50),
  view_count INTEGER DEFAULT 0,
  like_count INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);`}</code>
            </pre>
          </div>
          <ol style={styles.list} start="3">
            <li>In n8n, add "PostgreSQL" credentials with your database details</li>
            <li>Update table name in "Save to Database" node if different</li>
          </ol>
        </div>

        <div style={styles.setupStep}>
          <h3 style={styles.setupStepTitle}>7. Activate Workflow</h3>
          <ol style={styles.list}>
            <li>Review all node configurations</li>
            <li>Click "Activate" toggle in the top right corner</li>
            <li>Test with a webhook request or wait for scheduled trigger</li>
          </ol>
        </div>

        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>⚠️ Important Notes</h3>
          <ul style={styles.list}>
            <li>YouTube API has a daily quota of 10,000 units (free tier)</li>
            <li>Video upload consumes ~1,600 units per request</li>
            <li>Store video files on accessible disk or network storage</li>
            <li>Use environment variables for sensitive credentials</li>
            <li>Test with private videos before going public</li>
            <li>Monitor n8n execution logs for errors</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    color: '#e0e0e0',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  },
  header: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '3rem 2rem',
    textAlign: 'center',
    borderBottom: '4px solid #5a67d8',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    margin: '0 0 0.5rem 0',
    color: '#ffffff',
  },
  subtitle: {
    fontSize: '1.25rem',
    margin: 0,
    color: '#e0e0ff',
    opacity: 0.9,
  },
  nav: {
    display: 'flex',
    gap: '0.5rem',
    padding: '1rem 2rem',
    backgroundColor: '#1a1a1a',
    borderBottom: '1px solid #333',
    overflowX: 'auto',
    justifyContent: 'center',
  },
  tab: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#999',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '500',
    transition: 'all 0.2s',
    borderRadius: '6px',
    whiteSpace: 'nowrap',
  },
  activeTab: {
    backgroundColor: '#667eea',
    color: '#ffffff',
  },
  main: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem',
  },
  content: {
    animation: 'fadeIn 0.3s ease-in',
  },
  section: {
    marginBottom: '3rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    color: '#ffffff',
  },
  text: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#ccc',
    marginBottom: '1.5rem',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '1.5rem',
    marginTop: '1.5rem',
  },
  featureCard: {
    backgroundColor: '#1a1a1a',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #333',
    transition: 'transform 0.2s, border-color 0.2s',
  },
  featureIcon: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  featureTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '0.75rem',
    color: '#ffffff',
  },
  featureList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  nodeList: {
    display: 'grid',
    gap: '2rem',
  },
  nodeCategory: {
    backgroundColor: '#1a1a1a',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #333',
  },
  nodeCategoryTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#667eea',
  },
  nodeItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.75rem 0',
    borderBottom: '1px solid #2a2a2a',
  },
  nodeName: {
    fontWeight: '500',
    color: '#ffffff',
  },
  nodeDesc: {
    color: '#999',
    fontSize: '0.9rem',
  },
  stepList: {
    display: 'grid',
    gap: '1.5rem',
  },
  step: {
    display: 'flex',
    gap: '1.5rem',
    backgroundColor: '#1a1a1a',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #333',
  },
  stepNumber: {
    width: '40px',
    height: '40px',
    backgroundColor: '#667eea',
    color: '#ffffff',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    flexShrink: 0,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#ffffff',
  },
  stepDesc: {
    color: '#ccc',
    margin: 0,
  },
  code: {
    backgroundColor: '#2a2a2a',
    padding: '0.2rem 0.4rem',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.9em',
    color: '#ff79c6',
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem',
    flexWrap: 'wrap',
  },
  primaryButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#667eea',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  secondaryButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#2a2a2a',
    color: '#ffffff',
    border: '1px solid #444',
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  codeBlock: {
    backgroundColor: '#1a1a1a',
    border: '1px solid #333',
    borderRadius: '8px',
    overflow: 'auto',
    marginBottom: '1.5rem',
  },
  pre: {
    margin: 0,
    padding: '1.5rem',
  },
  codeContent: {
    fontFamily: 'Monaco, Consolas, "Courier New", monospace',
    fontSize: '0.9rem',
    color: '#f8f8f2',
    lineHeight: '1.5',
  },
  infoBox: {
    backgroundColor: '#1a3a4a',
    border: '1px solid #2a5a7a',
    borderRadius: '8px',
    padding: '1.5rem',
    marginTop: '1.5rem',
  },
  infoTitle: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#7dd3fc',
  },
  list: {
    paddingLeft: '1.5rem',
    lineHeight: '1.8',
  },
  subList: {
    paddingLeft: '1.5rem',
    marginTop: '0.5rem',
  },
  apiSection: {
    marginBottom: '2rem',
  },
  apiTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#ffffff',
  },
  endpoint: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    backgroundColor: '#1a1a1a',
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #333',
    marginBottom: '1.5rem',
  },
  method: {
    padding: '0.25rem 0.75rem',
    backgroundColor: '#10b981',
    color: '#ffffff',
    borderRadius: '4px',
    fontWeight: 'bold',
    fontSize: '0.9rem',
  },
  url: {
    fontFamily: 'monospace',
    fontSize: '0.95rem',
    color: '#ff79c6',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: '500',
    color: '#ccc',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#2a2a2a',
    border: '1px solid #444',
    borderRadius: '6px',
    color: '#ffffff',
    fontSize: '1rem',
    boxSizing: 'border-box',
  },
  textarea: {
    minHeight: '100px',
    resize: 'vertical',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1rem',
  },
  th: {
    textAlign: 'left',
    padding: '0.75rem',
    backgroundColor: '#2a2a2a',
    borderBottom: '2px solid #444',
    fontWeight: '600',
    color: '#ffffff',
  },
  td: {
    padding: '0.75rem',
    borderBottom: '1px solid #333',
    color: '#ccc',
  },
  setupStep: {
    backgroundColor: '#1a1a1a',
    padding: '1.5rem',
    borderRadius: '12px',
    border: '1px solid #333',
    marginBottom: '1.5rem',
  },
  setupStepTitle: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#667eea',
  },
  link: {
    color: '#667eea',
    textDecoration: 'none',
  },
  footer: {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: '#1a1a1a',
    borderTop: '1px solid #333',
    color: '#666',
  },
};
