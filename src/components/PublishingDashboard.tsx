import React, { useState, useEffect } from 'react';
import { BlogPostSchema } from '@/types/cms';
import { generatePublishingSteps, assessContentQuality, getPrePublishingChecklist, getPostPublishingTasks, calculatePublishingReadiness } from '@/utils/publishingWorkflow';
import { CheckCircle, XCircle, AlertCircle, Clock, ExternalLink, Share2 } from 'lucide-react';

interface PublishingDashboardProps {
  post: BlogPostSchema;
  onUpdate: (post: BlogPostSchema) => void;
}

const PublishingDashboard: React.FC<PublishingDashboardProps> = ({ post, onUpdate }) => {
  const [steps, setSteps] = useState(generatePublishingSteps(post));
  const [quality, setQuality] = useState(assessContentQuality(post));
  const [readiness, setReadiness] = useState(calculatePublishingReadiness(post));
  const [preChecklist, setPreChecklist] = useState<string[]>([]);
  const [postTasks, setPostTasks] = useState<string[]>([]);

  useEffect(() => {
    setSteps(generatePublishingSteps(post));
    setQuality(assessContentQuality(post));
    setReadiness(calculatePublishingReadiness(post));
    setPreChecklist(getPrePublishingChecklist(post));
    setPostTasks(getPostPublishingTasks(post));
  }, [post]);

  const getStatusIcon = (completed: boolean, required: boolean) => {
    if (completed) {
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    } else if (required) {
      return <XCircle className="w-5 h-5 text-red-500" />;
    } else {
      return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (completed: boolean, required: boolean) => {
    if (completed) {
      return 'text-green-700 bg-green-50 border-green-200';
    } else if (required) {
      return 'text-red-700 bg-red-50 border-red-200';
    } else {
      return 'text-yellow-700 bg-yellow-50 border-yellow-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Dashboard */}
        <div className="lg:col-span-2 space-y-6">
          {/* Publishing Readiness */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Publishing Readiness</h2>
              <div className="text-right">
                <div className="text-3xl font-bold text-blue-600">{readiness.readiness.toFixed(0)}%</div>
                <div className="text-sm text-gray-600">{readiness.status}</div>
              </div>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${readiness.readiness}%` }}
              ></div>
            </div>
            
            {readiness.nextSteps.length > 0 && (
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800 mb-2">Next Steps:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {readiness.nextSteps.map((step, index) => (
                    <li key={index}>• {step}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Publishing Steps */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">Publishing Checklist</h2>
            <div className="space-y-4">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`p-4 rounded-lg border ${getStatusColor(step.completed, step.required)}`}
                >
                  <div className="flex items-start space-x-3">
                    {getStatusIcon(step.completed, step.required)}
                    <div className="flex-1">
                      <h3 className="font-semibold">{step.name}</h3>
                      <p className="text-sm mt-1">{step.description}</p>
                      {step.required && !step.completed && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs bg-red-100 text-red-800 rounded">
                          Required
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Quality Assessment */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4">Content Quality</h2>
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-4xl font-bold text-blue-600">{quality.grade}</div>
              <div>
                <div className="text-lg font-semibold">Quality Score: {quality.score}/10</div>
                <div className="text-sm text-gray-600">Content Assessment</div>
              </div>
            </div>
            
            <div className="space-y-2">
              {quality.feedback.map((item, index) => (
                <div key={index} className="text-sm text-gray-700">
                  {item.startsWith('Areas for improvement:') ? (
                    <div className="font-semibold text-yellow-700">{item}</div>
                  ) : (
                    <div>• {item}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Pre-Publishing Checklist */}
          {preChecklist.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center">
                <AlertCircle className="w-5 h-5 mr-2" />
                Required Before Publishing
              </h3>
              <ul className="text-sm text-red-700 space-y-1">
                {preChecklist.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Post-Publishing Tasks */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Share2 className="w-5 h-5 mr-2" />
              Post-Publishing Tasks
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              {postTasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <Clock className="w-4 h-4 mr-2 mt-0.5 text-gray-400" />
                  {task}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <ExternalLink className="w-4 h-4 mr-2" />
                Preview Post
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                <CheckCircle className="w-4 h-4 mr-2" />
                Publish Now
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors">
                <Clock className="w-4 h-4 mr-2" />
                Schedule Publish
              </button>
            </div>
          </div>

          {/* Content Stats */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Content Statistics</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Word Count:</span>
                <span className="font-medium">{post.body.split(/\s+/).length}</span>
              </div>
              <div className="flex justify-between">
                <span>Reading Time:</span>
                <span className="font-medium">{Math.ceil(post.body.split(/\s+/).length / 200)} min</span>
              </div>
              <div className="flex justify-between">
                <span>Internal Links:</span>
                <span className="font-medium">{post.internalLinks}</span>
              </div>
              <div className="flex justify-between">
                <span>External Links:</span>
                <span className="font-medium">{post.externalLinks}</span>
              </div>
              <div className="flex justify-between">
                <span>CTAs:</span>
                <span className="font-medium">{post.ctaCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishingDashboard;
