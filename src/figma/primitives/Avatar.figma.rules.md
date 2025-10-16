# Avatar Design Rules

## Avatar Types
- **Avatar**: Individual user profile pictures
- **AvatarBlock**: Avatar with name and username text
- **AvatarGroup**: Multiple avatars displayed together

## Usage Guidelines
- Use avatars to represent users, team members, or profile pictures
- Always provide fallback initials when no image is available
- Use consistent sizing across your application
- Consider accessibility with proper alt text and contrast

## Size Variants
- **Small**: 24px - For compact spaces, lists, and secondary contexts
- **Medium**: 32px - Default size for most use cases
- **Large**: 48px - For prominent displays and user profiles
- **Extra Large**: 64px+ - For hero sections and main user displays

## Avatar States
- **Default**: Normal display with image or initials
- **Loading**: Placeholder state while image loads
- **Error**: Fallback state when image fails to load
- **Online**: Green indicator for active users
- **Offline**: Gray indicator for inactive users
- **Away**: Yellow indicator for temporarily unavailable users

## Accessibility
- Provide meaningful alt text for screen readers
- Ensure sufficient contrast for initials fallback
- Use semantic HTML elements when possible
- Support keyboard navigation for interactive avatars
- Provide text alternatives for status indicators

## AvatarBlock Guidelines
- Use for user cards, comments, and profile displays
- Keep name text concise and readable
- Username should be secondary information
- Maintain consistent spacing between avatar and text
- Use appropriate text hierarchy (name > username)

## AvatarGroup Guidelines
- Limit to 3-4 visible avatars to maintain clarity
- Use "+X" indicator for additional users
- Maintain consistent spacing between avatars
- Consider hover states to show full user list
- Use appropriate sizing for the context

## Color Guidelines
- Use brand colors for status indicators
- Ensure initials have sufficient contrast
- Use neutral colors for offline/inactive states
- Consider colorblind accessibility for status colors

## Do's and Don'ts
✅ Do: Use consistent avatar sizing throughout your app
✅ Do: Provide meaningful fallback initials
✅ Do: Use appropriate status indicators
✅ Do: Maintain proper spacing in groups
✅ Do: Consider loading and error states
❌ Don't: Use avatars for non-human entities
❌ Don't: Mix different avatar sizes inconsistently
❌ Don't: Use low contrast colors for initials
❌ Don't: Overcrowd avatar groups
❌ Don't: Use generic placeholder images

## Responsive Behavior
- Scale avatar sizes appropriately on mobile devices
- Maintain touch targets for interactive avatars
- Consider smaller groups on mobile screens
- Ensure text remains readable at all sizes
- Use appropriate spacing for different screen densities

## Implementation Notes
- Always handle image loading errors gracefully
- Provide initials as fallback when no image is available
- Use proper aspect ratios (typically square)
- Consider lazy loading for performance
- Implement proper caching for user images
