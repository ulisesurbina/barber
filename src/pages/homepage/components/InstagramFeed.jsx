import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InstagramFeed = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop",
      caption: "Fresh fade and beard trim for our client Michael. That confidence boost is everything! ✂️ #BarberCraftStudio #FreshCut",
      likes: 234,
      comments: 18,
      timestamp: "2 hours ago",
      hashtags: ["#BarberCraftStudio", "#FreshCut", "#BeardTrim", "#Confidence"],
      barber: "Marcus Rodriguez"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop",
      caption: "The art of the straight razor shave. Precision, tradition, and pure craftsmanship. 🪒 #StraightRazor #Tradition",
      likes: 189,
      comments: 12,
      timestamp: "5 hours ago",
      hashtags: ["#StraightRazor", "#Tradition", "#Craftsmanship", "#BarberLife"],
      barber: "Antonio Silva"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop",
      caption: "Beard sculpting session with James. Every angle matters when creating the perfect shape. 🎨 #BeardSculpting",
      likes: 156,
      comments: 9,
      timestamp: "8 hours ago",
      hashtags: ["#BeardSculpting", "#Precision", "#ArtOfGrooming", "#BeardGoals"],
      barber: "James Thompson"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=400&h=400&fit=crop",
      caption: "Hot towel treatment in progress. The luxury experience that sets us apart. 🔥 #HotTowel #LuxuryGrooming",
      likes: 201,
      comments: 15,
      timestamp: "12 hours ago",
      hashtags: ["#HotTowel", "#LuxuryGrooming", "#Relaxation", "#Premium"],
      barber: "Antonio Silva"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop",
      caption: "Classic pompadour styled to perfection. Timeless elegance never goes out of style. 💫 #Pompadour #Classic",
      likes: 178,
      comments: 11,
      timestamp: "1 day ago",
      hashtags: ["#Pompadour", "#Classic", "#Timeless", "#Style"],
      barber: "Marcus Rodriguez"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=400&h=400&fit=crop",
      caption: "Behind the scenes: The tools of our trade. Quality equipment for quality results. 🛠️ #BehindTheScenes",
      likes: 143,
      comments: 7,
      timestamp: "1 day ago",
      hashtags: ["#BehindTheScenes", "#Tools", "#Quality", "#Craftsmanship"],
      barber: "James Thompson"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setSelectedPost(null);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-6">
              Latest <span className="text-gradient-gold">Work</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)]?.map((_, index) => (
              <div key={index} className="aspect-square bg-muted rounded-lg animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <Icon name="Instagram" size={20} className="text-accent mr-2" />
            <span className="text-accent font-body font-medium">@BarberCraftStudio</span>
          </div>
          
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary mb-6">
            Latest <span className="text-gradient-gold">Work</span>
          </h2>
          
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Follow our journey on Instagram to see daily transformations, behind-the-scenes content, 
            and the artistry that defines BarberCraft Studio.
          </p>

          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            iconName="Instagram"
            iconPosition="left"
          >
            Follow @BarberCraftStudio
          </Button>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {instagramPosts?.map((post, index) => (
            <motion.div
              key={post?.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => openPost(post)}
              className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            >
              <Image
                src={post?.image}
                alt={`Instagram post ${post?.id}`}
                className="w-full h-full object-cover"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <div className="flex items-center">
                      <Icon name="Heart" size={20} className="mr-1" />
                      <span className="text-sm font-medium">{post?.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="MessageCircle" size={20} className="mr-1" />
                      <span className="text-sm font-medium">{post?.comments}</span>
                    </div>
                  </div>
                  <p className="text-xs opacity-80">{post?.timestamp}</p>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Icon name="Instagram" size={14} color="white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-accent mb-2">15.2K</div>
            <div className="text-sm text-muted-foreground font-body">Followers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">1.2K</div>
            <div className="text-sm text-muted-foreground font-body">Posts</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-sm text-muted-foreground font-body">Engagement</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">4.9</div>
            <div className="text-sm text-muted-foreground font-body">Rating</div>
          </div>
        </motion.div>
      </div>
      {/* Post Modal */}
      {selectedPost && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closePost}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e?.stopPropagation()}
            className="bg-card rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <Image
                src={selectedPost?.image}
                alt={`Instagram post ${selectedPost?.id}`}
                className="w-full h-80 object-cover"
              />
              <button
                onClick={closePost}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Instagram" size={20} color="white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">@BarberCraftStudio</h4>
                    <p className="text-sm text-muted-foreground">{selectedPost?.timestamp}</p>
                  </div>
                </div>
                <div className="text-sm text-accent font-medium">by {selectedPost?.barber}</div>
              </div>
              
              <p className="font-body text-primary mb-4 leading-relaxed">
                {selectedPost?.caption}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedPost?.hashtags?.map((tag, index) => (
                  <span key={index} className="text-accent text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Icon name="Heart" size={20} className="text-accent" />
                    <span className="text-sm font-medium">{selectedPost?.likes} likes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="MessageCircle" size={20} className="text-muted-foreground" />
                    <span className="text-sm font-medium">{selectedPost?.comments} comments</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  iconName="ExternalLink"
                  iconPosition="right"
                >
                  View on Instagram
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default InstagramFeed;