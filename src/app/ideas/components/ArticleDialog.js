'use client';

import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { Button } from "@/app/components/ui/button";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import Image from 'next/image';

export default function ArticleDialog({ article, children }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="bg-black/95 backdrop-blur-lg border-white/20 text-white max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        {/* Article Image */}
                        <div className="relative w-full h-64 bg-gray-800 overflow-hidden">
                            {(article.dialogImage || article.image) ? (
                                <Image
                                    src={article.dialogImage || article.image}
                                    alt={article.title}
                                    fill
                                    quality={100}
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                    <span className="text-white/50 font-sf-pro text-lg">
                                        Article Image
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Article Meta */}
                        <div className="flex items-center space-x-6 text-white/60">
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-4 h-4" />
                                <span className="font-sf-pro text-sm">{article.year}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span className="font-sf-pro text-sm">{article.readTime || '5 min read'}</span>
                            </div>
                            {article.source && (
                                <div className="flex items-center space-x-2">
                                    <span className="font-sf-pro text-sm">Source: {article.source}</span>
                                </div>
                            )}
                        </div>

                        <DialogTitle 
                            className="font-sf-pro text-white text-left"
                            style={{
                                fontWeight: "300",
                                fontSize: "clamp(28px, 4vw, 48px)",
                                lineHeight: "110%",
                                letterSpacing: "0%",
                            }}
                        >
                            {article.title}
                        </DialogTitle>
                    </motion.div>
                </DialogHeader>
                
                <motion.div 
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {/* Article Abstract/Summary */}
                    <div className="space-y-4">
                        <h3 
                            className="font-sf-pro text-white/90"
                            style={{
                                fontWeight: "400",
                                fontSize: "20px",
                                lineHeight: "120%",
                            }}
                        >
                            Abstract
                        </h3>
                        <p 
                            className="font-sf-pro text-white/80 leading-relaxed"
                            style={{
                                fontWeight: "300",
                                fontSize: "16px",
                                lineHeight: "160%",
                            }}
                        >
                            {article.abstract || article.description}
                        </p>
                    </div>

                    {/* Key Points */}
                    {article.keyPoints && (
                        <div className="space-y-4">
                            <h3 
                                className="font-sf-pro text-white/90"
                                style={{
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    lineHeight: "120%",
                                }}
                            >
                                Key Points
                            </h3>
                            <ul className="space-y-2">
                                {article.keyPoints.map((point, index) => (
                                    <li 
                                        key={index}
                                        className="font-sf-pro text-white/70 flex items-start"
                                        style={{
                                            fontWeight: "300",
                                            fontSize: "15px",
                                            lineHeight: "150%",
                                        }}
                                    >
                                        <span className="text-white/40 mr-3">•</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Full Article Summary */}
                    {article.summary && (
                        <div className="space-y-4">
                            <h3 
                                className="font-sf-pro text-white/90"
                                style={{
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    lineHeight: "120%",
                                }}
                            >
                                Summary
                            </h3>
                            <div 
                                className="font-sf-pro text-white/80 leading-relaxed space-y-4"
                                style={{
                                    fontWeight: "300",
                                    fontSize: "16px",
                                    lineHeight: "160%",
                                }}
                            >
                                {article.summary.split('\n\n').map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-6 border-t border-white/10">
                        {article.articleUrl && (
                            <Button 
                                variant="gradient" 
                                className="w-full font-sf-pro"
                                style={{
                                    fontWeight: "400",
                                    fontSize: "16px",
                                }}
                                onClick={() => window.open(article.articleUrl, '_blank')}
                            >
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Read Full Article
                            </Button>
                        )}
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
}
